import bookshelf from '../db';

/**
 * pre_user model.
 */
class PreUser extends bookshelf.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return 'pre_users';
  }
}

export default PreUser;
