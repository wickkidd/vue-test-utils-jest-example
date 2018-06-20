import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import App from '@/App.vue'
jest.mock('axios')

describe('App', () => {
  const wrapper = shallowMount(App)

  it('add an item to data.items when passed', () => {
    wrapper.vm.addItem('list item 3')

    expect(wrapper.vm.items.pop()).toEqual('list item 3')
  })

  it('gets a message from the server when the button is clicked', async () => {
    wrapper.find('button').trigger('click')

    await flushPromises()

    expect(wrapper.vm.serverMessage).toBe('mock value')
  })
})