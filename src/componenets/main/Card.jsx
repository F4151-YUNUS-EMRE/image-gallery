

const Card=(data)=>{
    console.log(data);
    const {photographer,src:{large}}=data
    return (
      <div className="cards">
        <div className="image">
          <img src={large} alt="" />
        </div>
        <p>{photographer}</p>
      </div>
    );
}

export default Card;