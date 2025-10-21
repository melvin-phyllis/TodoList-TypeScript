import type { ListePropstype } from "../types"

const ShowList = ({ List }: ListePropstype) => {
  return (
    <>
      <div className="overflow-x-auto bg-white flex items-center justify-center  shadow rounded-md">
        <table className=" divide-y text-3xl divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {List?.length > 0 && (List?.map((items, index) => (
              <>
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{items.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{items.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{items?.date && (new Date().toLocaleString())}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                      En cours
                    </span>
                  </td>
                </tr>
              </>
            )))}


          </tbody>
        </table>
      </div>
    </>
  )
}

export default ShowList