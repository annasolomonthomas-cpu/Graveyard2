
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #000;
    color: #fff;
    font-family: 'Times New Roman', Times, serif; /* Classical, imperial tone */
    overflow-x: hidden;
}

/* The giant track */
.scroll-wrapper {
    height: 300vh;
    width: 100%;
    position: relative;
}

/* The frame locked in front of the screen */
.sticky-viewport {
    height: 100vh;
    width: 100%;
    position: sticky;
    top: 0;
    overflow: hidden;
}

/* 50/50 Split Grid */
.split-bg {
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

.panel {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4rem;
    transition: background 0.5s ease;
}

.panel-vasai {
    background: #111;
    border-right: 1px solid #222;
}

.panel-sp {
    background: #161616;
}

/* Text on the edges */
.body-text {
    max-width: 350px;
    opacity: 1;
    transition: opacity 0.3s ease;
}

.body-text h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #8a8a8a;
}

.body-text p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #ccc;
}

.side-text-sp {
    align-self: flex-end;
    text-align: right;
}

/* Center Epitaph Layout */
.inscription-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    pointer-events: none; /* Allows scrolling directly through the text */
}

.center-inscription {
    font-size: 3vw; /* Scales elegantly based on screen size */
    text-align: center;
    white-space: nowrap;
    letter-spacing: 25px; /* Wide, airy starting point */
    font-weight: 300;
    text-shadow: 0px 0px 10px rgba(0,0,0,0.8);
    transform-origin: center center; /* Critical for clean 90deg rotation */
}

/* Placeholder for your future custom illustrations */
.illustration-placeholder {
    height: 50%;
    border: 1px dashed #333;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #444;
}
