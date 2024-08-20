import {useEffect, useCallback, useState} from '@wordpress/element';

export const usePaymentProcessing = (
	billing,
	cardNumber,
	expiryDate,
	cvc,
	PAYMENT_METHOD_NAME,
	emitResponse,
	onPaymentSetup,
	onCheckoutFail
) => {

	const [error, setError] = useState('');
	const onUSAePayError = useCallback((message) => {
		console.log(message);
		setError(message);
		return message ? message : false;
	}, []);

	const [effectTrigger, setEffectTrigger] = useState(0);
	// hook into and register callbacks for events
	useEffect(() => {
		console.log("🚀 ~ file: payment-processing.js:22 ~ useEffect ~ useEffect:", effectTrigger)

		setEffectTrigger(effectTrigger + 1);

		const onSubmit = async () => {
			try {
				// if there's an error return that.
				if (error) {
					console.log('returning');
					return {
						type: emitResponse.responseTypes.ERROR,
						message: error,
					};
				}
				const billingAddress = billing.billingAddress;

				let usaepayArgs = {};

				usaepayArgs = {
					'usaepay-card-number': cardNumber,
					'usaepay-card-expiry': expiryDate,
					'usaepay-card-cvc': cvc
				};

				return {
					type: emitResponse.responseTypes.SUCCESS,
					meta: {
						paymentMethodData: {
							...usaepayArgs,
							billing_email: billingAddress.email,
							billing_first_name: billingAddress?.first_name ?? '',
							billing_last_name: billingAddress?.last_name ?? '',
							paymentMethod: PAYMENT_METHOD_NAME,
							paymentRequestType: 'cc',
						},
						billingAddress,
					},
				};
			} catch (e) {
				console.log('catch', e);
				return {
					type: emitResponse.responseTypes.ERROR,
					message: e,
				};
			}
		};
		const unsubscribeProcessing = onPaymentSetup(onSubmit);
		return () => {
			unsubscribeProcessing();
		};
	}, [
		onPaymentSetup,
		billing.billingAddress,
		onUSAePayError,
		error,
		emitResponse.noticeContexts.PAYMENTS,
		emitResponse.responseTypes.ERROR,
		emitResponse.responseTypes.SUCCESS,
	]);

	// hook into and register callbacks for events.
	useEffect(() => {
		const onError = ({processingResponse}) => {
			if (processingResponse?.paymentDetails?.errorMessage) {
				return {
					type: emitResponse.responseTypes.ERROR,
					message: processingResponse.paymentDetails.errorMessage,
					messageContext: emitResponse.noticeContexts.PAYMENTS,
				};
			}
			// so we don't break the observers.
			return true;
		};
		const unsubscribeAfterProcessing = onCheckoutFail(
			onError
		);
		return () => {
			unsubscribeAfterProcessing();
		};
	}, [
		onCheckoutFail,
		emitResponse.noticeContexts.PAYMENTS,
		emitResponse.responseTypes.ERROR,
	]);
	return onUSAePayError;
};
