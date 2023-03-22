import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { userList } from '../store/actions'
import avatar from '../assets/user.png'
import dotIcon from '../assets/more.svg'
import ReactPaginate from 'react-paginate';
const UserList = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  useEffect(()=> {
    dispatch(userList(page))
  },[dispatch, page])
  const list = useSelector(state => state.list)
 
  return (
   <>
    <table className='table-fixed min-w-full divide-y divide-gray-200'>
      <thead className='bg-[#FAFBFC]'>
        <tr>
          <th scope='col' className='pl-4 pr-10 text-left text-xs font-semibold text-header uppercase'>#id</th>
          <th scope='col' className='pr-[340px] text-left text-xs font-semibold text-header uppercase'>user</th>
          <th scope='col' className='pr-[440px] text-left text-xs font-semibold text-header uppercase'>email</th>
          <th scope='col' className='py-4 pr-4 text-left text-xs font-semibold text-header uppercase'>option</th>
        </tr>
      </thead>
      <tbody className='text-header font-semibold'>
        {
          list.data.map((user, index) => (
            <tr key={index}>
              <td className='pl-4 py-10'>{user.id}</td>
              <td>
                <div className='flex items-center gap-5'>
                  <img src={avatar} alt="avatar"/>
                  {user.first_name} {user.last_name}
                </div>
              </td>
              <td>{user.email}</td>
              <td >
               <img src={dotIcon} alt="avatar"/>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    <ReactPaginate
        containerClassName='flex mt-8 pagination'
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e)=> setPage(e.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={2}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
   </>
  )
}

export default UserList