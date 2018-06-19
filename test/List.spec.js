import { shallowMount } from '@vue/test-utils'
import List from '@/components/List.vue'

describe('List', () => {
  const items = ['item 1', 'item 2']
  const wrapper = shallowMount(List, {
    propsData: { items }
  })

  it('renders li for each item in props.items', () => {
    expect(wrapper.findAll('li')).toHaveLength(items.length)
  })

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
