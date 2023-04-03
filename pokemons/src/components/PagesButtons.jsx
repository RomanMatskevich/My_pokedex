import React, { useMemo } from "react";
import '../App.css'
import PaginationButton from "./PaginationButton";


const PagesButtons = (props) => {
    
    let allButtons = Math.ceil(props.totalPokemons/16)
    const pages = useMemo(()=>{
        const offset = 5
        const itemCount =11
        let pages = []
        if(props.currentPage<offset)
            for(let i=2;i<itemCount;i++)
                pages.push(i)
        else if(allButtons-props.currentPage>offset){
            for (let i = props.currentPage - offset+2; i < props.currentPage - offset + itemCount; i++) {
                pages.push(i)
            }
        }else 
            for(let i = allButtons-itemCount+1; i<allButtons; i++)
                pages.push(i)
        return pages
    }, [props.currentPage, allButtons])
    
    return(
        <div className="button__wraper">
            <PaginationButton  value = {props.currentPage - 1} text = {'<<'}  setPage= {props.setCurrentPageHandler}/>
            <PaginationButton currentPage={props.currentPage} value = {1} text = {1}  setPage= {props.setCurrentPageHandler}/>
            {pages.map((page)=> <PaginationButton currentPage={props.currentPage} value = {page} text = {page} setPage={props.setCurrentPageHandler} key = {page}/>)}
            <PaginationButton currentPage={props.currentPage} value = {allButtons} text = {allButtons}  setPage= {props.setCurrentPageHandler}/>
            <PaginationButton value = {props.currentPage + 1} text = {'>>'}  setPage= {props.setCurrentPageHandler}/>  
        </div>
    );
}
export default PagesButtons;