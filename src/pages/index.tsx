import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
import * as Tabs from '@radix-ui/react-tabs';
/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root defaultValue="tab1" className='pt-10'>
          <Tabs.List className="flex items-center gap-x-2" aria-label="Manage my Todos">
            <Tabs.Trigger className="w-fit data-[state=active]:bg-gray-700 data-[state=active]:text-white border rounded-full  p-[12px_24px]" value="tab1">
              All
            </Tabs.Trigger>
            <Tabs.Trigger className="w-fit data-[state=active]:bg-gray-700 data-[state=active]:text-white border rounded-full  p-[12px_24px]" value="tab2">
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger className="w-fit data-[state=active]:bg-gray-700 data-[state=active]:text-white border rounded-full  p-[12px_24px]" value="tab3">
              Completed
            </Tabs.Trigger>
          </Tabs.List>


          <div className="pt-10">
            <Tabs.Content className="TabsContent" value="tab1">
              <TodoList list={'all'} />
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tab2">
              <TodoList list={'pending'} />
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tab3">
              <TodoList list={'completed'} />
            </Tabs.Content>

          </div>


        </Tabs.Root>
        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
