const user = {
    name: 'zine sang',
    imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FcXyycl%2FdJMb9MioQ5M%2FAAAAAAAAAAAAAAAAAAAAAJA6oWNm0LtjhL_2vZFNqJ90TAMRKhS-Lscszwe-LIp8%2Ftfile.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1756652399%26allow_ip%3D%26allow_referer%3D%26signature%3DS49gWb4uFs5HWGl8LG%252FYtnKyGxQ%253D',
    imageSize: 90,
};

function Profile() {
    return (
        <div>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </div>
    );
}

export default Profile;