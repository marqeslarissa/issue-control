import style from "./Clock.module.scss";

export default function Clock() {
  return (
    <>  //         {/* Pode ser colocado <React.Fragment>*/}
      <span className={style.clockNumber}>0</span>
      <span className={style.clockNumber}>0</span>
      <span className={style.dvisionClock}>:</span>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockNumber}>0</span>
    </>
  )
}