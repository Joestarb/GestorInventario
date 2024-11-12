import { TableProps } from "../models/dtos/components/componentsProps";

type DynamicTableProps<T> = TableProps<T> & {
  className?: string;
  renderActions?: (item: T) => React.ReactNode;
};

function DynamicTable<T>({ data, headers, renderRow, className, renderActions }: DynamicTableProps<T>) {
  return (
    <table className={`min-w-full rounded-lg overflow-hidden ${className}`}>
      <thead>
        <tr className="border-b">
          {headers.map((header, index) => (
            <th
              key={index}
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              {String(header)}
            </th>
          ))}
          {renderActions && <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>}
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
                  className="px-6 py-4 whitespace-nowrap text-sm"
                >
                  {header === 'status' ? (
                    <span
                      className={
                        item[header] === 'Out of Stock'
                          ? 'text-red-500 font-semibold'
                          : item[header] === 'less than 10'
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
              {renderActions && (
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {renderActions(item)}
                </td>
              )}
            </tr>
          )
        ))}
      </tbody>
    </table>
  );
}

export default DynamicTable;
