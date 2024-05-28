const Foods = ({food}) => {
    
    const SpicyCheck = (isHot) => {
        // console.log(isHot);
        if (isHot === true) {
            alert('맵다');
        } else {
            alert('안맵다');
        }
    }
    
    return (
        <div onClick={() => SpicyCheck(food.isHot)} style={{ width: '1000px', borderRadius: '4px', border: `2px solid ${food.isHot ? 'red' : 'black'}` }}>
            <p>이름: {food.name}</p>
            <p>스타일: {food.origin}</p>
            <p>매운정도: {food.isHot ? "매움" : "안매움"}</p>
            <p>가격: {food.price}</p>

        </div>
    )
}

export default Foods;