import Button from "./Button"

const DiaryList = () => {
  return (
    <div className='DiaryList'>
      <div className='menu_bar'></div>
      <select name="" id="">
        <option value="latest">최신순</option>
        <option value="oldest">오래된 순</option>
      </select>
      <Button text={"새 일기 쓰기"} />
      <div className='list_wrapper'></div>
    </div>
  );
};

export default DiaryList;