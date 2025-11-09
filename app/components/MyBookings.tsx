import React from 'react'
import { CloudDownload } from 'lucide-react';


export default function MyBookings() {
    return (
        <div>

            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='mb-5'>
                    <h2 className='text-xl font-semibold'>My bookings</h2>
                    <p className='mt-2 text-sm text-gray-500'>Access all your previous bookings.</p>
                </div>

                <div>
                    <button className='btn btn-sm'><CloudDownload />Download All</button>
                </div>
            </div>



            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Property Name</th>
                            <th>Address</th>
                            <th>Rent</th>
                            <th>Stay Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>261 Harris Street</th>
                            <td>Cy 102 Abercombie street, Chippendale, NSW 2008</td>
                            <td>$250 </td>
                            <td>Jan 6, 2024 to Jan 6, 2024</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>261 Harris Street</th>
                            <td>Cy 102 Abercombie street, Chippendale, NSW 2008</td>
                            <td>$250 </td>
                            <td>Jan 6, 2024 to Jan 6, 2024</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>261 Harris Street</th>
                            <td>Cy 102 Abercombie street, Chippendale, NSW 2008</td>
                            <td>$250 </td>
                            <td>Jan 6, 2024 to Jan 6, 2024</td>
                        </tr>

                        <tr>
                            <th>261 Harris Street</th>
                            <td>Cy 102 Abercombie street, Chippendale, NSW 2008</td>
                            <td>$250 </td>
                            <td>Jan 6, 2024 to Jan 6, 2024</td>
                        </tr>

                        <tr>
                            <th>261 Harris Street</th>
                            <td>Cy 102 Abercombie street, Chippendale, NSW 2008</td>
                            <td>$250 </td>
                            <td>Jan 6, 2024 to Jan 6, 2024</td>
                        </tr>

                        <tr>
                            <th>261 Harris Street</th>
                            <td>Cy 102 Abercombie street, Chippendale, NSW 2008</td>
                            <td>$250 </td>
                            <td>Jan 6, 2024 to Jan 6, 2024</td>
                        </tr>
                        <tr>
                            <th>261 Harris Street</th>
                            <td>Cy 102 Abercombie street, Chippendale, NSW 2008</td>
                            <td>$250 </td>
                            <td>Jan 6, 2024 to Jan 6, 2024</td>
                        </tr>

                        <tr>
                            <th>261 Harris Street</th>
                            <td>Cy 102 Abercombie street, Chippendale, NSW 2008</td>
                            <td>$250 </td>
                            <td>Jan 6, 2024 to Jan 6, 2024</td>
                        </tr>

                        <tr>
                            <th>261 Harris Street</th>
                            <td>Cy 102 Abercombie street, Chippendale, NSW 2008</td>
                            <td>$250 </td>
                            <td>Jan 6, 2024 to Jan 6, 2024</td>
                        </tr>

                        <tr>
                            <th>261 Harris Street</th>
                            <td>Cy 102 Abercombie street, Chippendale, NSW 2008</td>
                            <td>$250 </td>
                            <td>Jan 6, 2024 to Jan 6, 2024</td>
                        </tr>


                        <tr>
                            <th>261 Harris Street</th>
                            <td>Cy 102 Abercombie street, Chippendale, NSW 2008</td>
                            <td>$250 </td>
                            <td>Jan 6, 2024 to Jan 6, 2024</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    )
}
