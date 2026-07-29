if (i == 0) {
  var unicodeTrimmer = function (token) {
    return token.update(function (s) {
      return s.replace(/^[^\p{L}\p{N}]+/u, '').replace(/[^\p{L}\p{N}]+$/u, '');
    });
  };
  this.pipeline.remove(lunr.trimmer);
  this.pipeline.add(unicodeTrimmer);
  this.searchPipeline.add(unicodeTrimmer);
}
