import bookshelf from '../db';

/**
 * User model.
 */
class User extends bookshelf.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return 'users';
  }

  /**
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }

  /**
   * Set hidden fields.
   */
  get hidden() {
    return ['password']
  }
}

export default User;
