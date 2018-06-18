import { shallowMount } from '@vue/test-utils'
import List from '@/components/List.vue'

describe('List', () => {
  const items = ['item 1', 'item 2']

  xit('renders li for each item in props.items', () => {
    // const wrapper = shallowMount(List, {
    //   propsData: { items }
    // })

    // expect(wrapper.findAll('li')).toHaveLength(items.length)
  })

  xit('matches snapshot', () => {
    // const wrapper = shallowMount(List, {
    //   propsData: { items }
    // })

    // expect(wrapper.html()).toMatchSnapshot()
  })
})
