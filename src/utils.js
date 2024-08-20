import {getSetting} from '@woocommerce/settings';

export const getBlocksConfiguration = () => {
	const usaepayServerData = getSetting('usaepay_data', null);

	if (!usaepayServerData) {
		throw new Error('USAePay initialization data is not available');
	}

	return usaepayServerData;
};
