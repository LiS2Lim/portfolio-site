import s from './Login.module.css';

export default () => {

  const getSession = () => {
      fetch(`${import.meta.env.VITE_API_URL}/auth`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  const postSession = () => {
      fetch(`${import.meta.env.VITE_API_URL}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
        body: JSON.stringify({
          username: 'your_username',
          password: 'your_password'
        }),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

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

      <button type="button" onClick={getSession()}>Session Call</button>
    </div>
  );
};