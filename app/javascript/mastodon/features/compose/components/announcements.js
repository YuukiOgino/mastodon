import React from 'react';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

const announcements = Immutable.fromJS([
  {
    id: 1,
    body: 'お知らせ機能を追加しました！',
    links: [
    ],
  },
  {
    id: 2,
    body: '利用時のお困りごとなどは @YuukiOgino へ Mention か DM でご連絡ください',
    links: [],
  },
]);

export default class Announcements extends React.PureComponent {

  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
  }

  render () {
    const { visible, onToggle } = this.props;
    const caretClass = visible ? 'fa fa-caret-down' : 'fa fa-caret-up';
    return (
      <div className='announcements'>
        <div className='compose__extra__header'>
          <i className='fa fa-bell' />
          お知らせ
          <button className='compose__extra__header__icon' onClick={onToggle} >
            <i className={caretClass} />
          </button>
        </div>
        { visible && (
          <ul>
            {announcements.map((announcement, idx) => (
              <li key={idx}>
                <div className='announcements__body'>
                  <p>{announcement.get('body')}</p>
                  <div className='links'>
                    {announcement.get('links').map((link, i) => (
                      <a href={link.get('href')} target='_blank' key={i}>
                        {link.get('body')}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

}
