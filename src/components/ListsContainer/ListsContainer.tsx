import React, { FC } from 'react'
import { IList } from '../../types'
import ActionButton from '../ActionButton/ActionButton'
import List from '../List/List'

type TListsConainerProps = {
  lists : IList[];
  boardId : string;
}


const ListsContainer: FC<TListsConainerProps>  = ({
  lists,
  boardId
}) => {
  return (
    <div className='listContainer'>
        {          
          lists.map(list =>(
            <List 
            key={list.listId} 
            list={list}
            boardId={boardId}
            />
          ))
        }
        <ActionButton
          boardId={boardId} 
          listId={""}
          list
        />
    </div>
  )
}

export default ListsContainer
