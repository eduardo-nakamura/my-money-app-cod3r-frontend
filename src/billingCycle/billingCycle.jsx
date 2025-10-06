import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabsContent from '../common/tab/tabsContent'
import TabContent from '../common/tab/tabContent'

import { selectTab } from '../common/tab/tabAction'

class billingCycle extends Component {
  componentWillMount(){
    this.props.selectTab('tabList')
  }
  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tabList' />
              <TabHeader label='Incluir' icon='plus' target='tabCreate' />
              <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
              <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <h2>Lista</h2>
              </TabContent>
                <TabContent id="tabCreate">
                <h2>Create</h2>
              </TabContent>
                <TabContent id="tabUpdate">
                <h2>Update</h2>
              </TabContent>
                <TabContent id="tabDelete">
                <h2>Delete</h2>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

// const mapStateToProps = state => ({tab: state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(null, mapDispatchToProps)(billingCycle)