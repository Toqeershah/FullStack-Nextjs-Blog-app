import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const SubsTableItem = ({email, date, mongoId, deleteEmail}) => {
    const emailDate = new Date(date);
  return (
    <tr className='bg-white text-left border-b'>
        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            {email ? email : "No Email Available"}
        </th>
        <td className='px-6 py-4 hidden sm:block'>
            {emailDate.toDateString()}
        </td>
        <td onClick={() => deleteEmail(mongoId)} className='px-6 py-4 cursor-pointer'>
            <FontAwesomeIcon className='pl-4' icon={faTrash} style={{ color: 'red' }} />
        </td>
    </tr>
  )
}

export default SubsTableItem