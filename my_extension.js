/**
 * Rename this file accordong to your needs..
 * this file should contain the main logic of the extension
 * 
 * 
 * 
 * 
 */

const my_extension = (() => {

    async function testMyExtension() {
        const context = await common.getContext();
        console.log("🚀 ~ testMyExtension ~ context:", context)
        // 2C2CA7F13B8647EBA74AF129B0E67043

        // utils.setFieldValue('#info', `User: ${context.user} :: ${context.account} :: ${context.company}`);
    }
// 7A5FBAE82151416CA5B87201A7F8EBAC
    async function startExtension() {

        console.log("🚀 ~ startExtension ~ startExtension:")
        try {
            const context = await common.getContext();
            console.log("🚀 ~ startExtension ~ selectedServiceCallId:", context.viewState.selectedServiceCallId);
            const serviceCallType = await common.fetchServiceCallType(context.viewState.selectedServiceCallId);
            
            if (serviceCallType !== '-7') {
                utils.setFieldValue('#info', 'Toto SV nie je typu Obhliadka a teda neobsahuje žiadne dáta na zobrazenie.');
            } else {
                // run the extension
            }
        } catch (error) {
            console.log("🚀 ~ startExtension ~ error:", error)
            utils.setFieldValue('#error', error);
        }
    }

    return {
        testMyExtension,
        startExtension
    }



})();