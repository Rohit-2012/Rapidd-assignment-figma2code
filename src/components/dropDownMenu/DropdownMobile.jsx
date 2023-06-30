import style from "./DropDownMenu.module.css";
function DropdownMobile() {
  return (
    <div className={style.innerBox}>
      <div>
        <ul className={style.menuLists}>
          <h4>Ipsum Lorem</h4>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>
      <div>
        <ul className={style.menuLists}>
          <h4>Ipsum Lorem</h4>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownMobile;