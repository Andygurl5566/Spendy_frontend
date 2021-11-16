function Landing(){
  return (
    <div>

      <nav class="navbar">
        <span class="navlink">About</span>
        <span class="navlink">Login</span>
        <span class="navlink">Sign Up</span>
      </nav>

      <main class= "main-text">
        <p>Welcome to <span>Spendsy, </span>
          <br/>
          a financial tracking app to help you keep balance.</p>
        <div class='btn-container'>
          <button class='btn'>Login</button>
          <button class='btn'>Sign Up</button>
        </div>
      </main>

      <img 
        src="https://images.unsplash.com/photo-1579014134953-1580d7f123f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        alt='wallet'
        class='landing-wallet'
        />

      <div class="customer-faces">
        <img src="https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?k=20&m=1291208214&s=612x612&w=0&h=WbHbwklzP81iAWV0dPlQWuBLxnbqJFk81a9OZG6qvSM="
        class="customer-image"/>
        <img src="https://i.pinimg.com/originals/d1/b8/27/d1b8272dba69e9a3384f47797aa71e93.jpg  "
        class="customer-image"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoPCG0L4UoRdw9Sg5_1eQuRIpR310O8Q-EpA&usqp=CAU"
        class="customer-image"/>
      </div>

      <footer>
        <h2>@FlatironSchool</h2>
        <h2>Yeison, Aidan, Andrea</h2>
      </footer>
    </div>
  )
}

export default Landing