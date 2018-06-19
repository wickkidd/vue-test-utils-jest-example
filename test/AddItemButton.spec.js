import { shallowMount } from '@vue/test-utils'
import AddItemButton from '@/components/AddItemButton.vue'

describe('AddItemButton', () => {
  const wrapper = shallowMount(AddItemButton)
  const input   = wrapper.find('input')
  const button  = wrapper.find('button')

  it('emits addItem with input text', () => {
    input.setValue('list item 3')
    button.trigger('click')

    expect(wrapper.emitted().addItem).toHaveLength(1)
    expect(wrapper.emitted().addItem[0][0]).toEqual('list item 3')
  })
})
