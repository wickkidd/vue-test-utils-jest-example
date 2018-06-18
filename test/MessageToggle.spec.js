import { shallowMount } from '@vue/test-utils'
import MessageToggle from '@/components/MessageToggle.vue'
import Message from '@/components/Message.vue'

describe('MessageToggle', () => {
  it('toggles msg passed to Message when button is clicked', () => {
    const wrapper = shallowMount(MessageToggle)
    const button = wrapper.find('#toggle-message')

    button.trigger('click')

    const MessageComponent = wrapper.find(Message)

    expect(MessageComponent.props().msg).toEqual('message')

    button.trigger('click')

    expect(MessageComponent.props().msg).toEqual('toggled message')
  })
})
