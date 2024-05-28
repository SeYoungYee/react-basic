

const Btns = ({onClick,sign}) => {
    // console.log(props);

    // let  {onClick,sign} = props;

    return (
        <button type="button" onClick={onClick}>{sign}</button>
    )
}

export default Btns;