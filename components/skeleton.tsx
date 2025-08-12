export const TableSkeleton = () => { 
    return(
        <table className="w-full text-sm texl-left text-gray-500">
              <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="py-3 px-6">#</th>
                  <th className="py-3 px-6">name</th>
                  <th className="py-3 px-6">Phone Number</th>
                  <th className="py-3 px-6">Created At</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr className="bg-amber-50 border-b">
                    <td className="py-3 px-6">
                        <div className="h-4 w-4 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-6">
                        <div className="h-4 w-32 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-6">
                        <div className="h-4 w-20 rounded bg-gray-100"></div>
                    </td>
                    <td className="py-3 px-6">
                        <div className="h-4 w-32 rounded bg-gray-100"></div>
                    </td>
                    <td className="flex justify-center gap-1 py-3">
                      
                    </td>
                  </tr>
                
              </tbody>
            </table>
    )
 };