import { TableProps } from "../models/dtos/components/componentsProps";

type DynamicTableProps<T> = TableProps<T> & {
  className?: string;
};

function DynamicTable<T>({ data, headers, renderRow, className }: DynamicTableProps<T>) {
  return (
    <table className={`min-w-full   rounded-lg overflow-hidden ${className}`}>
      <thead>
        <tr className="border-b">
          {headers.map((header, index) => (
            <th
              key={index}
              className={`px-6 py-3 text-sm font-medium tracking-wider ${header === 'Actions' ? 'text-center' : 'text-left'}`}
            >
              {String(header)}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item, rowIndex) => (
          renderRow ? (
            renderRow(item)
          ) : (
            <tr key={rowIndex} className="border-b">
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm "
                >
                  {header === 'status' ? (
                    <span
                      className={
                        item[header] === 'Delayed'
                          ? 'text-red-500 font-semibold'
                          : item[header] === 'Confirmed'
                            ? 'text-blue-500 font-semibold'
                            : item[header] === 'Returned'
                              ? 'text-gray-500 font-semibold'
                              : 'text-green-500 font-semibold'
                      }
                    >
                      {String(item[header])}
                    </span>
                  ) : (
                    String(item[header])
                  )}
                </td>
              ))}
            </tr>
          )
        ))}
      </tbody>
    </table>
  );
}

export default DynamicTable;
