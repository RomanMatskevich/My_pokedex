function PaginationButton({value,text,setPage ,currentPage}){

    return(
            <span className = {value===currentPage?"active_button":""}
                onClick = {() => setPage(value)}
                key = {value}>{text} 
            </span>)   
}
export default PaginationButton;