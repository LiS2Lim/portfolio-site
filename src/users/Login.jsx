import s from './Login.module.css';

export default () => {
  return (
    <div className={s.container}>
      <h1>로그인 화면</h1>
      <form className={s.form} action={`${import.meta.env.VITE_API_URL}/user/login`} method="POST">
        <div className={s.inputbox}>
            <label for="userid">아이디</label>
            <input type="text" name="userid" />
            <label for="password">패스워드</label>
            <input type="password" name="password" / >
        </div>
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
};