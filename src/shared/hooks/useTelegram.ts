import {TelegramWebApps} from "telegram-webapps-types-new";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const tg: TelegramWebApps.WebApp = window.Telegram.WebApp;
export function useTelegram() {

    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide()
        }else {
            tg.MainButton.show()
        }
    }


    return {
        tg,
        onClose,
        user: tg.initDataUnsafe.user,
        onToggleButton,
    };
}
