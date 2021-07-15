export default function Input({name,value,onChange,error}){
    return(
        <>
        <div className="inp-label">
        <label>
          {name}
          <input
          className="val-input"
            type="text"
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
      <span className="error">{error}</span>
      </>
    )
}