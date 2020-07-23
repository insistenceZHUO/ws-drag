import React, { Component } from 'react';

import sortableJS from 'sortablejs';

class WsDrag extends Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.sortable = sortableJS;
  }

  initSortable = () => {
    const {
      onMove,
      onEnd,
      onChange,
      filterClass,
      children,
      ...rest
    } = this.props;

    const instance = this.containerRef.current;

    if (!instance) {
      return;
    }

    const sortableOptions = {
      filter: filterClass ? `.${filterClass}` : '',
      ghostClass: `zent-ghost`,
      chosenClass: `zent-chosen`,
      dragClass: `zent-drag`,
      fallbackClass: `zent-fallback`,
      onMove: (e) => {
        if (onMove) {
          return onMove(e);
        }
        return filterClass ? !e.related.classList.contains(filterClass) : true;
      },
      onEnd: (e) => {
        console.log('onEnd');
        const { items } = this.props;
        onEnd && onEnd(e);

        if (!items) {
          return;
        }

        const { oldIndex, newIndex } = e;
        const newItems = this.reorder(items, oldIndex, newIndex);

        onChange && onChange(newItems);
      },
      onChange: (e) => {
        console.log('change');
      },
      ...rest,
    };
    this.sortable = sortableJS.create(instance, sortableOptions);
  };

  destorySortableInstance() {
    if (this.sortable) {
      this.sortable.destroy();
      this.sortable = null;
    }
  }

  componentDidMount() {
    this.initSortable();
  }

  componentWillUnmount() {
    this.destorySortableInstance();
  }

  render() {
    const { className, children, tag = 'div' } = this.props;
    const Com = tag;
    return (
      <Com ref={this.containerRef} className={className}>
        {children}
      </Com>
    );
  }

  reorder(array, fromIndex, toIndex) {
    const lastIndex = array.length - 1;
    const firstIndex = 0;
    const result = new Array(array.length);

    let tmp;

    if (fromIndex === toIndex) {
      return array;
    }

    if (fromIndex < toIndex) {
      for (let i = firstIndex; i <= lastIndex; i++) {
        if (i === fromIndex) {
          tmp = array[i];
        } else if (i > fromIndex && i < toIndex) {
          result[i - 1] = array[i];
        } else if (i === toIndex) {
          result[i - 1] = array[i];
          result[i] = tmp;
        } else {
          result[i] = array[i];
        }
      }
    } else {
      for (let i = lastIndex; i >= firstIndex; i--) {
        if (i === fromIndex) {
          tmp = array[i];
        } else if (i < fromIndex && i > toIndex) {
          result[i + 1] = array[i];
        } else if (i === toIndex) {
          result[i] = tmp;
          result[i + 1] = array[i];
        } else {
          result[i] = array[i];
        }
      }
    }

    return result;
  }
}

export default WsDrag;
