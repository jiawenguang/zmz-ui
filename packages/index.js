/**
 * @author zmz
 * Date: 2019-7-18
 * QQ:1028470211
 * Email:1028470211@qq.com
 */
import ZmzUiButton from './button/index.js';
import ZmzTag from './tag/index'
import ZmzUiShowMore from './show-more/index'
import MetaInfo from './meta-info/index'
import ZmzUiAlert from './alert/index'
import ZmzUiLoadingBar from './loading-bar/index'
import Skeleton from './skeleton/index'
import ZmzUiContainerArticle from './container/article/index.js';
import ZmzUiContainerAside from './container/aside/index.js';
import ZmzUiContainerDialog from './container/dialog/index.js';
import ZmzUiContainerFigcaption from './container/figcaption/index.js';
import ZmzUiContainerFigure from './container/figure/index.js';
import ZmzUiContainerFooter from './container/footer/index.js';
import ZmzUiContainerHeader from './container/header/index.js';
import ZmzUiContainerHgroup from './container/hgroup/index.js';
import ZmzUiContainerNav from './container/nav/index.js';
import ZmzUiContainerSection from './container/section/index.js';
import ZmzUiContainerContainer from './container/container/index.js';
import ZmzUiContainerMain from './container/main/index.js';
import ZmzUiLayoutRow from './layout/row/index.js';
import ZmzUiLayoutCol from './layout/col/index.js';
import ZmzUiMenu from './menu/index.js';
import ZmzUiMenuGroup from './menu-group/index.js';
import ZmzUiSubMenu from './menu-submenu/index.js';
import ZmzUiMenuItem from './menu-item/index.js';
import ZmzUiMessage from './message/index.js';
import ZmzUiCard from './card/index.js';
import ZmzUiPagination from './media/index.js';
import ZmzUiBreadcrumb from './breadcrumb/index.js';
import ZmzUiBreadcrumbItem from './breadcrumb-item/index.js'
import ZmzUiFormInput from './form/input/index.js'
import ZmzUiFormLabel from './form/label/index.js'
import ZmzUiFormTextarea from './form/textarea/index'
import ZmzUiFormInputTag from './form/input-tag/index'
import ZmzUiFormattime from './formattime/index'
import ZmzUiFormSelect from './form/select/index'
import ZmzUiFormSelectOption from './form/select/index-option'
import ZmzUiFormSelectOptionGroup from './form/select/index-option-group'
import ZmzUiLazyload from './lazyload/index'
import ZmzUiDatePicker from './calendar/index'
import ZmzUiRadio from './form/input-radio/index'
import ZmzUiCheckbox from './form/input-checkbox/index'
import ZmzUiSwitch from './form/input-switch/index'
import ZmzUiTree from './tree/index'
import ZmzUiTable from './table/index'
import ZmzUiProgress from './progress/index'
import ZmzUiDropdown from './dropdown/index'
import ZmzUiDropdownItem from './dropdown/index-item'

const components = [
  ZmzUiButton,
  ZmzTag,
  ZmzUiShowMore,
  Skeleton,
	ZmzUiContainerArticle,
	ZmzUiContainerAside,
	ZmzUiContainerDialog,
	ZmzUiContainerFigcaption,
	ZmzUiContainerFigure,
	ZmzUiContainerFooter,
	ZmzUiContainerHeader,
	ZmzUiContainerHgroup,
	ZmzUiContainerNav,
	ZmzUiContainerSection,
	ZmzUiContainerContainer,
	ZmzUiContainerMain,
	ZmzUiLayoutRow,
	ZmzUiLayoutCol,
	ZmzUiMenu,
	ZmzUiMenuGroup,
	ZmzUiSubMenu,
	ZmzUiMenuItem,
	ZmzUiAlert,
	ZmzUiMessage,
	ZmzUiCard,
	ZmzUiPagination,
  ZmzUiBreadcrumb,
  ZmzUiBreadcrumbItem,
  ZmzUiFormInput,
  ZmzUiFormLabel,
  ZmzUiFormTextarea,
  ZmzUiFormInputTag,
  ZmzUiFormattime,
  ZmzUiFormSelect,
  ZmzUiFormSelectOption,
  ZmzUiFormSelectOptionGroup,
  ZmzUiLazyload,
  ZmzUiDatePicker,
  ZmzUiRadio,
  ZmzUiCheckbox,
  ZmzUiSwitch,
  ZmzUiTree,
  ZmzUiTable,
  ZmzUiProgress,
  ZmzUiDropdown,
  ZmzUiDropdownItem
]

const install = function(Vue, opts = {}) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  MetaInfo.install(Vue)
  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };
  ZmzUiLazyload.install(Vue, opts)
  Vue.prototype.$loading = ZmzUiLoadingBar
  Vue.prototype.$message = ZmzUiMessage
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ZmzUiButton,
  ZmzTag,
  ZmzUiShowMore,
  MetaInfo,
  ZmzUiLoadingBar,
  Skeleton,
	ZmzUiContainerArticle,
	ZmzUiContainerAside,
	ZmzUiContainerDialog,
	ZmzUiContainerFigcaption,
	ZmzUiContainerFigure,
	ZmzUiContainerFooter,
	ZmzUiContainerHeader,
	ZmzUiContainerHgroup,
	ZmzUiContainerNav,
	ZmzUiContainerSection,
	ZmzUiContainerContainer,
	ZmzUiContainerMain,
	ZmzUiLayoutRow,
	ZmzUiLayoutCol,
	ZmzUiMenu,
	ZmzUiMenuGroup,
	ZmzUiSubMenu,
	ZmzUiMenuItem,
	ZmzUiAlert,
	ZmzUiMessage,
	ZmzUiCard,
	ZmzUiPagination,
  ZmzUiBreadcrumb,
  ZmzUiBreadcrumbItem,
  ZmzUiFormInput,
  ZmzUiFormLabel,
  ZmzUiFormTextarea,
  ZmzUiFormInputTag,
  ZmzUiFormattime,
  ZmzUiFormSelect,
  ZmzUiFormSelectOption,
  ZmzUiFormSelectOptionGroup,
  ZmzUiLazyload,
  ZmzUiDatePicker,
  ZmzUiRadio,
  ZmzUiCheckbox,
  ZmzUiSwitch,
  ZmzUiTree,
  ZmzUiTable,
  ZmzUiProgress,
  ZmzUiDropdown,
  ZmzUiDropdownItem
}
