const md5 = require('md5');
const models = require('../../models/index');
const member = models.member

class Member {

  async store(req, res) {
    try {
      const data = {
        nama_member: req.body.nama_member,
        alamat: req.body.alamat,
        jenis_kelamin: req.body.jenis_kelamin,
        telp: req.body.telp
      }

      let result = await member.create(data)
      return res.status(200).json({
        message: "success adding data member",
        data: result
      });

    } catch (error) {
      return res.status(500).json({
        message: "Internal error",
        err: error
      });
    }
  }

  async update(req, res) {
    try {

      const param = {id_member:req.params.id}
      const data = {
        nama_member: req.body.nama_member,
        alamat: req.body.alamat,
        jenis_kelamin: req.body.jenis_kelamin,
        telp: req.body.telp
      }

      let result = await member.update(data, {where:param})
      return res.status(200).json({
        message: "success update data member",
        data: result
      });

    } catch (error) {
      return res.status(500).json({
        message: "Internal error",
        err: error
      });
    }
  }

  async delete(req, res) {
    try {

      const param = { id_member: req.params.id }

      let result = await member.destroy({ where: param })
      return res.status(200).json({
        message: "success delete data member",
        data: result
      });

    } catch (error) {
      return res.status(500).json({
        message: "Internal error",
        err: error
      });
    }
  }

  async index(req, res) {
    try {
      let result = await member.findAll()
      return res.status(200).json({
        message: "success delete data member",
        data: result
      });

    } catch (error) {
      return res.status(500).json({
        message: "Internal error",
        err: error
      });
    }
  }

  async show(req, res) {
    try {

      const param = { id_member: req.params.id }

      let result = await member.findOne({ where: param })
      return res.status(200).json({
        message: "success get one data member",
        data: result
      });

    } catch (error) {
      return res.status(500).json({
        message: "Internal error",
        err: error
      });
    }
  }
}

module.exports = Member