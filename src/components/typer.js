function Typer({chkWord ,getStarted ,forwardedRef}) {
    
    return (
        <>
            <input type='text' autoFocus  ref={forwardedRef}  onInput={chkWord}  onKeyDown={getStarted} onClick={(e)=>(e.target.select())}/>
        </>
    )
}
export default Typer;