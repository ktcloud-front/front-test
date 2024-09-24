/**
 * storybook manager
 * @description storybook addons 설정 관리
 * @see https://storybook.js.org/docs/configure/user-interface/theming
 * @author stephen.k@kt.com
 * @date 2024.08.29
 */
import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import logo from '../public/logo/logo-bi-cloud-basic.png'

addons.setConfig({
    theme: {
        ...themes.normal,
        brandTitle: 'kt cloud',
        brandUrl: 'https://www.ktcloud.com/',
        brandImage: logo,
    },
});
