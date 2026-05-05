
import img1 from './virat.webp'
import img2 from './dhoni.webp'
import img3 from './download.jpg'
import './App.css';

function App() {
  return (
    <div>
    <header>
    <h1>Cricket World </h1>
    <nav>
        <a href="home.html">Home</a>
        <a href="players.html">Players</a>
    </nav>
     </header>

<section class="players">
    <h2>Famous Cricket Players</h2>

    <div class="card">
        <img src={img1}/>
        <h3>Virat Kohli</h3>
        <p>One of the greatest batsmen in modern cricket and former Indian captain.</p>
    
    </div>

    <div class="card">
        <img src={img2}/>
        <h3>MS Dhoni</h3>
        <p>Legendary captain known for cool and finishing matches.</p>
    </div>

    <div class="card">
        <img src={img3}/>   
        <h3>Sachin Tendulkar</h3>
        <p>Known as the "God of Cricket", he holds many records.</p>
    </div>

</section>

<footer>
    <p>© 2026 Cricket World</p>
</footer>
<div>
    
   </div>
    </div>
    
  );
}

export default App;
