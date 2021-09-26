function Typer({chkWord ,getStarted ,forwardedRef}) {
    
    return (
        <>
            <input type='text' autoFocus autocapitalize="off" ref={forwardedRef}  onInput={chkWord}  onKeyDown={getStarted} onClick={(e)=>(e.target.select())}/>
        </>
    )
}
export default Typer;