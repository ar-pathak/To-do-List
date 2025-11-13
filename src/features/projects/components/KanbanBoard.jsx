// features/projects/components/KanbanBoard.jsx
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

/*
  Kanban expects data shaped like:
  {
    columns: {
      todo: { id: 'todo', title: 'To do', items: [ { id, title, projectId }, ... ] },
      inprogress: { ... },
      done: { ... }
    },
    columnOrder: ['todo','inprogress','done']
  }
*/
const KanbanBoard = ({ initialColumns, onMove }) => {
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];

    const sourceItems = Array.from(sourceCol.items);
    const [moved] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, moved);
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceCol, items: sourceItems },
      });
    } else {
      const destItems = Array.from(destCol.items);
      destItems.splice(destination.index, 0, moved);
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceCol, items: sourceItems },
        [destination.droppableId]: { ...destCol, items: destItems },
      });
    }

    if (onMove) onMove(result, columns);
  };

  return (
    <div className="w-full">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-4 overflow-x-auto py-2">
          {Object.entries(columns).map(([colId, col]) => (
            <div key={colId} className="min-w-[260px] bg-gray-50 rounded-xl p-3 border border-gray-100">
              <h3 className="text-sm font-semibold mb-3">{col.title} <span className="text-xs text-gray-400">({col.items.length})</span></h3>
              <Droppable droppableId={colId}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-3 min-h-[40px]">
                    {col.items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(prov, snapshot) => (
                          <div
                            ref={prov.innerRef}
                            {...prov.draggableProps}
                            {...prov.dragHandleProps}
                            className={`bg-white rounded-lg p-3 shadow-sm border border-gray-100 cursor-pointer ${snapshot.isDragging ? "ring-2 ring-[#FF6767]" : ""}`}
                          >
                            <div className="text-sm font-medium text-gray-800">{item.title}</div>
                            <div className="text-xs text-gray-500 mt-1">{item.projectTitle}</div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
