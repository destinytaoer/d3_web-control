/**
 * GraphEditor: 图编辑器类
 *
 * @parameter
 *   el [ HTMLElement | String ] 容器元素或者 ID
 *   options [ Object ] 配置选项
 *
 * @constructor
 *   el: 容器, HTML 元素
 *   graph: 当前图实例
 *   type: 当前图谱类型
 *   eventProxy: 事件池
 *
 * @methods
 *
 *
 * create by destiny on 2019-03-26
 * update by destiny on 2020-03-28
 */
import Force from '../Graph/Force';
import Tree from '../Graph/Tree';
import Cache from './Cache.js';
import EventEmitter from './EventEmitter';
import Toolbar from './Toolbar';
import Info from './Info';
import Search from './Search';
import Menu from './Menu';
import Modal from './Modal';
import { checkEl } from '../utils';

class GraphEditor {
  constructor(el, options) {
    this.el = checkEl(el);
    this.options = options;
    this.toolbarOptions = options.toolbar || {};
    this.searchOptions = options.search || {};
    this.menuOptions = options.menu || {};
    this.graphOptions = options.graph || {};
    this.infoOptions = options.info || {};
    this.editOptions = options.edit || {};
    this.type = this.graphOptions.type || 'force';
  }
  init() {
    this.toolbar = new Toolbar(this.el, this.type, this.toolbarOptions);
    this.toolbar.init();
  }
}

export default GraphEditor;
