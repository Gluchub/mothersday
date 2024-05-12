import React from 'react'
import "../styles/index.css"
import HeartScene from '../components/HeartScene'
const Home = () => {
  return (
    <div>
      <div class="home">

        <div>
          <h1>I <span id='love'>Love</span> you <span id='mom'>Mom</span>
          </h1>
          <p>"To the most wonderful mom in the world, Happy Mother's Day! Your love has been my guiding light, your strength my inspiration. Thank you for your endless support, your comforting embrace, and your unwavering belief in me. Today, I celebrate you - the heart and soul of our family. May this day be filled with all the joy and happiness you deserve. Here's to you, Mom, for all the love you've given and all the dreams you've made possible. I love you more than words can express. Happy Mother's Day!"</p>
        </div>
        <div>
          <HeartScene />
        </div>

      </div>
      <div class="container">
        <h1>Memories with Mom</h1>
        <div class="photos">
            <div class="photo">
                <img src="../../mom1.jpg" alt="Mom 1"/>
            </div>
            <div class="photo">
                <img src="../../mom2.jpg" alt="Mom 2"/>
            </div>
            <div class="photo">
                <img src="../../mom3.jpg" alt="Mom 3"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home