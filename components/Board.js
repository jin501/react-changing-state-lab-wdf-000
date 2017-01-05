const React = require('react');
const Field = require('./Field');

class Board extends React.Component {

  render () {
    const { board, onClick } = this.props;
    // this is a shorcut fot writing:
    // const board = this.props.board;
    // const onClick = this.props.onClick;

    const fields = board.map( (field, i) =>
      <Field
        key={i}
        onClick={onClick.bind(null, i)}
        player="X" />
    );

    return (
      <div className='board'>
      {
        fields
      }
      </div>
    );
  }
}

module.exports = Board;
