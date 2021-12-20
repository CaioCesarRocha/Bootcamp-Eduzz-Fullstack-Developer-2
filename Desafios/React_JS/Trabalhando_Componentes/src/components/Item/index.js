const Item = ({name}) => { //desestruturação da props passada
    return (
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
          {name}
        </a>
    )
}

export default Item;