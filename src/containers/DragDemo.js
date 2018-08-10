import React, { Component } from "react";

import { List, Card } from "antd";
import { DragDropContext, DragSource, DropTarget } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import flow from "lodash/flow";

const BaseCard = props => {
  const { item, connectDragSource, connectDropTarget, ...restProps } = props;
  const style = { ...restProps.style, cursor: "move" };
  return connectDropTarget(
    connectDragSource(
      <div>
        <Card style={style} title={item.title}>
          Card content
        </Card>
      </div>
    )
  );
};

const rowSource = {
  beginDrag(props) {
    return {
      item: props.item,
      index: props.index
    };
  }
};

const rowTarget = {
  drop(props, monitor) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    console.log(props);
    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    props.moveRow(dragIndex, hoverIndex);

    monitor.getItem().index = hoverIndex;
  }
};

const DragableCard = flow(
  DropTarget("row", rowTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    sourceClientOffset: monitor.getSourceClientOffset()
  })),
  DragSource("row", rowSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    dragRow: monitor.getItem(),
    clientOffset: monitor.getClientOffset(),
    initialClientOffset: monitor.getInitialClientOffset()
  }))
)(BaseCard);

class Product extends Component {
  state = {
    data: [
      {
        title: "Title 1"
      },
      {
        title: "Title 2"
      },
      {
        title: "Title 3"
      },
      {
        title: "Title 4"
      },
      {
        title: "Title 5"
      },
      {
        title: "Title 6"
      }
    ]
  };
  moveRow = (dragIndex, hoverIndex) => {
    const { data } = this.state;
    const dragRow = data[dragIndex];

    data[dragIndex] = data[hoverIndex];
    data[hoverIndex] = dragRow;
    console.log(data);
    console.log(dragIndex, hoverIndex);
    this.setState({ data });
  };
  render() {
    return (
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
        dataSource={this.state.data}
        renderItem={(item, index) => (
          <List.Item>
            <DragableCard item={item} index={index} moveRow={this.moveRow} />
          </List.Item>
        )}
      />
    );
  }
}

export default DragDropContext(HTML5Backend)(Product);
