function Box({ children }){
    return <div className="box">{ children }</div>
}

<Box>
    <h1>Hello World</h1>
    <p>This is inside the box.</p>
</Box>