import { shallowMount } from '@vue/test-utils'
import MessageToggle from '@/components/MessageToggle.vue'
import Message from '@/components/Message.vue'

describe('MessageToggle', () => {
  const wrapper = shallowMount(MessageToggle)
  const MessageComponent = wrapper.find(Message)

  it('toggles msg passed to Message when button is clicked', () => {
    const button = wrapper.find('#toggle-message')

    button.trigger('click')

    expect(MessageComponent.props().msg).toEqual('message')

    button.trigger('click')

    expect(MessageComponent.props().msg).toEqual('toggled message')
  })

  xit('passes msg to Message', () => {
    // wrapper.setData({ msg: 'foo' })

    // expect(MessageComponent.props().msg).toEqual('foo')
  })
})
