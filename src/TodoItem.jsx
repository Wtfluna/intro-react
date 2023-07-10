import PropTypes from 'prop-types';

function TodoItem({ labelContent }) {
    return (
        <li>
            <input type="checkbox" className="todo"></input>
            <label>
                {labelContent}
            </label>
        </li>
    )
}

TodoItem.propTypes = {
    labelContent: PropTypes.string.isRequired
}

export default TodoItem;